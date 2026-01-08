import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("py")
export default class PyController {
  @operation({
    summary: "Get Py",
  })
  @get()
  static getPy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Py",
  })
  @post("{id}")
  static createPy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
