import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwh")
export default class KwhController {
  @operation({
    summary: "Get Kwh",
  })
  @get()
  static getKwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwh",
  })
  @post("{id}")
  static createKwh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
