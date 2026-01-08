import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvu")
export default class KvuController {
  @operation({
    summary: "Get Kvu",
  })
  @get()
  static getKvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvu",
  })
  @post("{id}")
  static createKvu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
