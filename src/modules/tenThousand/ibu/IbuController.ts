import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibu")
export default class IbuController {
  @operation({
    summary: "Get Ibu",
  })
  @get()
  static getIbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibu",
  })
  @post("{id}")
  static createIbu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
