import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fio")
export default class FioController {
  @operation({
    summary: "Get Fio",
  })
  @get()
  static getFio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fio",
  })
  @post("{id}")
  static createFio = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
