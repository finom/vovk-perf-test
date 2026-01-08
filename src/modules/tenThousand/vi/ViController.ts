import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vi")
export default class ViController {
  @operation({
    summary: "Get Vi",
  })
  @get()
  static getVi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vi",
  })
  @post("{id}")
  static createVi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
