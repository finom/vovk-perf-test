import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdu")
export default class GduController {
  @operation({
    summary: "Get Gdu",
  })
  @get()
  static getGdu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdu",
  })
  @post("{id}")
  static createGdu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
