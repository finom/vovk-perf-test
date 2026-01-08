import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iju")
export default class IjuController {
  @operation({
    summary: "Get Iju",
  })
  @get()
  static getIju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iju",
  })
  @post("{id}")
  static createIju = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
