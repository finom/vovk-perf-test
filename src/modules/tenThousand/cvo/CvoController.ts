import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvo")
export default class CvoController {
  @operation({
    summary: "Get Cvo",
  })
  @get()
  static getCvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvo",
  })
  @post("{id}")
  static createCvo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
