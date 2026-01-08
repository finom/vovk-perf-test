import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdw")
export default class KdwController {
  @operation({
    summary: "Get Kdw",
  })
  @get()
  static getKdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdw",
  })
  @post("{id}")
  static createKdw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
