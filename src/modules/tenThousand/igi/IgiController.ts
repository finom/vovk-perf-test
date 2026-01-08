import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igi")
export default class IgiController {
  @operation({
    summary: "Get Igi",
  })
  @get()
  static getIgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igi",
  })
  @post("{id}")
  static createIgi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
