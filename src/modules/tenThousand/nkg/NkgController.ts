import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkg")
export default class NkgController {
  @operation({
    summary: "Get Nkg",
  })
  @get()
  static getNkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkg",
  })
  @post("{id}")
  static createNkg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
