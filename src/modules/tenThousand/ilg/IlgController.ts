import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilg")
export default class IlgController {
  @operation({
    summary: "Get Ilg",
  })
  @get()
  static getIlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilg",
  })
  @post("{id}")
  static createIlg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
