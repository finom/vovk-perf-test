import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjd")
export default class GjdController {
  @operation({
    summary: "Get Gjd",
  })
  @get()
  static getGjd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gjd",
  })
  @post("{id}")
  static createGjd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
