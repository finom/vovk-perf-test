import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyx")
export default class KyxController {
  @operation({
    summary: "Get Kyx",
  })
  @get()
  static getKyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyx",
  })
  @post("{id}")
  static createKyx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
