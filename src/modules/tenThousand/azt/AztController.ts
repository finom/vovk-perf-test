import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azt")
export default class AztController {
  @operation({
    summary: "Get Azt",
  })
  @get()
  static getAzt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Azt",
  })
  @post("{id}")
  static createAzt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
