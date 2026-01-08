import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qr")
export default class QrController {
  @operation({
    summary: "Get Qr",
  })
  @get()
  static getQr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qr",
  })
  @post("{id}")
  static createQr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
