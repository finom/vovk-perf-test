import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijn")
export default class IjnController {
  @operation({
    summary: "Get Ijn",
  })
  @get()
  static getIjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijn",
  })
  @post("{id}")
  static createIjn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
