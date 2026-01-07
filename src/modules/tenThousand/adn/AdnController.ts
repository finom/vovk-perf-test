import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
