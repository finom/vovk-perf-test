import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdz")
export default class KdzController {
  @operation({
    summary: "Get Kdz",
  })
  @get()
  static getKdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdz",
  })
  @post("{id}")
  static createKdz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
