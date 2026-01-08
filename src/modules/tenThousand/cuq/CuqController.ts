import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cuq")
export default class CuqController {
  @operation({
    summary: "Get Cuq",
  })
  @get()
  static getCuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuq",
  })
  @post("{id}")
  static createCuq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
