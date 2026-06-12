import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avn")
export default class AvnController {
  @operation({
    summary: "Get Avn",
  })
  @get()
  static getAvn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Avn",
  })
  @post("{id}")
  static createAvn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
