import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etk")
export default class EtkController {
  @operation({
    summary: "Get Etk",
  })
  @get()
  static getEtk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Etk",
  })
  @post("{id}")
  static createEtk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
