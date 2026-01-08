import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iia")
export default class IiaController {
  @operation({
    summary: "Get Iia",
  })
  @get()
  static getIia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iia",
  })
  @post("{id}")
  static createIia = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
