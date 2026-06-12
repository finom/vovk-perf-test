import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("add")
export default class AddController {
  @operation({
    summary: "Get Add",
  })
  @get()
  static getAdd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Add",
  })
  @post("{id}")
  static createAdd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
