import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezt")
export default class EztController {
  @operation({
    summary: "Get Ezt",
  })
  @get()
  static getEzt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ezt",
  })
  @post("{id}")
  static createEzt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
