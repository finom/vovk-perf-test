import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igy")
export default class IgyController {
  @operation({
    summary: "Get Igy",
  })
  @get()
  static getIgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igy",
  })
  @post("{id}")
  static createIgy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
