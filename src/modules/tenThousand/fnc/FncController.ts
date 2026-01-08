import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnc")
export default class FncController {
  @operation({
    summary: "Get Fnc",
  })
  @get()
  static getFnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnc",
  })
  @post("{id}")
  static createFnc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
