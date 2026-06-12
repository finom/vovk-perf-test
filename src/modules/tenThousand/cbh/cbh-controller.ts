import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbh")
export default class CbhController {
  @operation({
    summary: "Get Cbh",
  })
  @get()
  static getCbh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cbh",
  })
  @post("{id}")
  static createCbh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
