import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imc")
export default class ImcController {
  @operation({
    summary: "Get Imc",
  })
  @get()
  static getImc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imc",
  })
  @post("{id}")
  static createImc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
