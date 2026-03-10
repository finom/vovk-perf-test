import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjg")
export default class GjgController {
  @operation({
    summary: "Get Gjg",
  })
  @get()
  static getGjg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gjg",
  })
  @post("{id}")
  static createGjg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
