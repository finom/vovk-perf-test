import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elo")
export default class EloController {
  @operation({
    summary: "Get Elo",
  })
  @get()
  static getElo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Elo",
  })
  @post("{id}")
  static createElo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
