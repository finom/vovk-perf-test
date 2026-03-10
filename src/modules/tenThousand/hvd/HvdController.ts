import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvd")
export default class HvdController {
  @operation({
    summary: "Get Hvd",
  })
  @get()
  static getHvd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hvd",
  })
  @post("{id}")
  static createHvd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
