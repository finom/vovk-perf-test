import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chl")
export default class ChlController {
  @operation({
    summary: "Get Chl",
  })
  @get()
  static getChl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Chl",
  })
  @post("{id}")
  static createChl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
