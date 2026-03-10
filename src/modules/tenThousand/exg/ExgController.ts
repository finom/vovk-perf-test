import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exg")
export default class ExgController {
  @operation({
    summary: "Get Exg",
  })
  @get()
  static getExg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Exg",
  })
  @post("{id}")
  static createExg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
