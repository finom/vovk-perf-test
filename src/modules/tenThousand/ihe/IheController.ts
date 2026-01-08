import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihe")
export default class IheController {
  @operation({
    summary: "Get Ihe",
  })
  @get()
  static getIhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihe",
  })
  @post("{id}")
  static createIhe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
