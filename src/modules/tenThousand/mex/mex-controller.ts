import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mex")
export default class MexController {
  @operation({
    summary: "Get Mex",
  })
  @get()
  static getMex = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mex",
  })
  @post("{id}")
  static createMex = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
