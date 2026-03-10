import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edf")
export default class EdfController {
  @operation({
    summary: "Get Edf",
  })
  @get()
  static getEdf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Edf",
  })
  @post("{id}")
  static createEdf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
