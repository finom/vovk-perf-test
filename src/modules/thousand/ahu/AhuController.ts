import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahu")
export default class AhuController {
  @operation({
    summary: "Get Ahu",
  })
  @get()
  static getAhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahu",
  })
  @post("{id}")
  static createAhu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
