import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hho")
export default class HhoController {
  @operation({
    summary: "Get Hho",
  })
  @get()
  static getHho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hho",
  })
  @post("{id}")
  static createHho = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
