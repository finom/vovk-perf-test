import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dof")
export default class DofController {
  @operation({
    summary: "Get Dof",
  })
  @get()
  static getDof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dof",
  })
  @post("{id}")
  static createDof = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
