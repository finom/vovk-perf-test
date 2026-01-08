import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmf")
export default class HmfController {
  @operation({
    summary: "Get Hmf",
  })
  @get()
  static getHmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmf",
  })
  @post("{id}")
  static createHmf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
