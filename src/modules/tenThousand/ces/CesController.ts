import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ces")
export default class CesController {
  @operation({
    summary: "Get Ces",
  })
  @get()
  static getCes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ces",
  })
  @post("{id}")
  static createCes = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
