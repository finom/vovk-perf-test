import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gya")
export default class GyaController {
  @operation({
    summary: "Get Gya",
  })
  @get()
  static getGya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gya",
  })
  @post("{id}")
  static createGya = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
