import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqe")
export default class AqeController {
  @operation({
    summary: "Get Aqe",
  })
  @get()
  static getAqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqe",
  })
  @post("{id}")
  static createAqe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
