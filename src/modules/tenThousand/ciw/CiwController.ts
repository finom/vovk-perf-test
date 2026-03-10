import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ciw")
export default class CiwController {
  @operation({
    summary: "Get Ciw",
  })
  @get()
  static getCiw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ciw",
  })
  @post("{id}")
  static createCiw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
