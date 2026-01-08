import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amf")
export default class AmfController {
  @operation({
    summary: "Get Amf",
  })
  @get()
  static getAmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amf",
  })
  @post("{id}")
  static createAmf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
