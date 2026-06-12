import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esk")
export default class EskController {
  @operation({
    summary: "Get Esk",
  })
  @get()
  static getEsk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Esk",
  })
  @post("{id}")
  static createEsk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
