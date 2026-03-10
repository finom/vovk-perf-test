import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aym")
export default class AymController {
  @operation({
    summary: "Get Aym",
  })
  @get()
  static getAym = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aym",
  })
  @post("{id}")
  static createAym = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
