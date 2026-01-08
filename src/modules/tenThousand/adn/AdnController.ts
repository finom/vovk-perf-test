import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adn")
export default class AdnController {
  @operation({
    summary: "Get Adn",
  })
  @get()
  static getAdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adn",
  })
  @post("{id}")
  static createAdn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
