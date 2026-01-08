import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekf")
export default class EkfController {
  @operation({
    summary: "Get Ekf",
  })
  @get()
  static getEkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekf",
  })
  @post("{id}")
  static createEkf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
