import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbx")
export default class NbxController {
  @operation({
    summary: "Get Nbx",
  })
  @get()
  static getNbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbx",
  })
  @post("{id}")
  static createNbx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
