import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ine")
export default class IneController {
  @operation({
    summary: "Get Ine",
  })
  @get()
  static getIne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ine",
  })
  @post("{id}")
  static createIne = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
