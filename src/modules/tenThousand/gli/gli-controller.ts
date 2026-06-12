import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gli")
export default class GliController {
  @operation({
    summary: "Get Gli",
  })
  @get()
  static getGli = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gli",
  })
  @post("{id}")
  static createGli = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
