import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbo")
export default class GboController {
  @operation({
    summary: "Get Gbo",
  })
  @get()
  static getGbo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbo",
  })
  @post("{id}")
  static createGbo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
